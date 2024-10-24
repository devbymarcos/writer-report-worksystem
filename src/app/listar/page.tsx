"use client";
import ListAll from "@/services/list/ListAll";
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
import { ClipboardList, FilePenLine } from "lucide-react";
import { formatDate } from "@/functions/formatDate";

const ListPage = () => {
  const [listdata, setListData] = useState([]);

  useEffect(() => {
    const list = new ListAll().execute();
    setListData(list);
  }, []);

  return (
    <>
      <div className="px-3">
        <Table className="min-w-full">
          <TableCaption>List dos seus relatorios.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Acão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listdata.map((item: any) => {
              return (
                <TableRow key={item.numberTicket}>
                  <TableCell>{item.numberTicket}</TableCell>
                  <TableCell>{formatDate(item.date)}</TableCell>
                  <TableCell className="overflow-hidden whitespace-nowrap">
                    {item.titleTicket}
                  </TableCell>
                  <TableCell className="flex items-end justify-end text-right gap-2">
                    <Button className="bg-blue-400" asChild>
                      <Link href={`/${item.type}?ticket=${item.numberTicket}`}>
                        <FilePenLine />
                      </Link>
                    </Button>
                    <Button className="bg-blue-400" asChild>
                      <Link href={`/copy/${item.type}/${item.numberTicket}`}>
                        <ClipboardList />
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
