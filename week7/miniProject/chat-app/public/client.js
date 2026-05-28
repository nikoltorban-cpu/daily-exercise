const socket = io();

const joinContainer = document.getElementById("join-container");
const chatContainer = document.getElementById("chat-container");

const joinBtn = document.getElementById("join-btn");

const usernameInput = document.getElementById("username");
const roomSelect = document.getElementById("room");

const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

const messagesDiv = document.getElementById("messages");
const usersList = document.getElementById("users");

let username = "";
let room = "";

joinBtn.addEventListener("click", () => {
  username = usernameInput.value.trim();
  room = roomSelect.value;

  if (!username) {
    alert("Please enter a username");
    return;
  }

  socket.emit("joinRoom", { username, room });

  joinContainer.classList.add("hidden");
  chatContainer.classList.remove("hidden");
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const msg = messageInput.value.trim();

  if (!msg) return;

  socket.emit("chatMessage", msg);

  messageInput.value = "";
});

socket.on("message", (message) => {
  const div = document.createElement("div");

  div.classList.add("message");

  div.innerHTML = `
    <strong>${message.username}</strong>
    <p>${message.text}</p>
  `;

  messagesDiv.appendChild(div);

  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Browser notification
  if (Notification.permission === "granted") {
    new Notification(`${message.username}: ${message.text}`);
  }
});

socket.on("roomUsers", (users) => {
  usersList.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.username;
    usersList.appendChild(li);
  });
});

// Request notification permission
if ("Notification" in window) {
  Notification.requestPermission();
}
