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

const ListPage = () => {
  const [listdata, setListData] = useState([]);

  useEffect(() => {
    const list = new ListAll().execute();
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
                  <TableCell className="flex gap-2">
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
