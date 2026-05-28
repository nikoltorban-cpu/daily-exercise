interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

function UserCard({
  name = "Unknown User",
  age = 18,
  role = "Guest",
}: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default UserCard;
