import React from "react";
import { TableItem } from "./TableItem";

export interface DataType {
  id: number;
  branch: string;
  card_type: string;
  quantity: string;
  status: {
    title: string;
    background: string;
    border: string;
    color: string;
  };
}

const data: DataType[] = [
  {
    id: 1,
    branch: "Corporate",
    card_type: "Instant",
    quantity: "10",
    status: {
      title: "Ready",
      background: "#ECFDF3",
      border: "#ABEFC6",
      color: "#067647"
    }
  },
  {
    id: 2,
    branch: "Corporate",
    card_type: "Personalized",
    quantity: "10",
    status: {
      title: "In Progress",
      background: "#FFFAEB",
      border: "#FEDF89",
      color: "#B54708"
    }
  },
  {
    id: 3,
    branch: "Corporate",
    card_type: "Personalized",
    quantity: "10",
    status: {
      title: "Acknowledged",
      background: "#EFF8FF",
      border: "#B2DDFF",
      color: "#175CD3"
    }
  },
  {
    id: 4,
    branch: "Corporate",
    card_type: "Instant",
    quantity: "10",
    status: {
      title: "Pending",
      background: "#F9FAFB",
      border: "#EAECF0",
      color: "#344054"
    }
  }
];

export const TableLists: React.FC = () => {
  return (
    <>
      {data.map((item) => (
        <TableItem key={item.id} {...item} />
      ))}
    </>
  );
};
