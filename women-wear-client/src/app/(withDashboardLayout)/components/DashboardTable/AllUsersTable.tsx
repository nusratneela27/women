"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

type Users = {
  name: string;
  email: string;
  role: string;
};

const AllUsersTable = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users`);
  const users = await res.json();

  return (
    <Table className="m-5 md:my-10 pe-5 md:pe-48 w-[1000px]">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Role</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map((user: Users) => (
          <TableRow className="border-b-2">
            <TableCell>
              <p>{user.name}</p>
            </TableCell>
            <TableCell>
              <p>{user.email}</p>
            </TableCell>
            <TableCell>
              <p>{user.role}</p>
            </TableCell>
            <TableCell className="w-40">
              <p
                className={
                  "bg-red-200 font-bold rounded text-center px-2 py-2 cursor-pointer"
                }
              >
                Delete Users
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsersTable;
