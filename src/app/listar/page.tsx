"use client";
import List from "@/services/rep/list/List";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ListPage = () => {
  const [listdata, setListData] = useState([]);

  useEffect(() => {
    const list = new List().execute();
    setListData(list);
  }, []);

  return (
    <>
      <div className="px-3">
        <Table>
          <TableCaption>List dos seus relatorios.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Ticket</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Acão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listdata.map((item: any) => {
              return (
                <TableRow key={item.numberTicket}>
                  <TableCell>{item.numberTicket}</TableCell>
                  <TableCell className="w-full">{item.titleTicket}</TableCell>
                  <TableCell>
                    <Button className="bg-blue-400" asChild>
                      <Link href={`/copy/${item.type}/${item.numberTicket}`}>
                        Ver copy
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ListPage;
