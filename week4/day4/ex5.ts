interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string; // optional
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);

  if (user.membershipLevel) {
    console.log(`Membership: ${user.membershipLevel}`);
  } else {
    console.log("Membership: none");
  }
}