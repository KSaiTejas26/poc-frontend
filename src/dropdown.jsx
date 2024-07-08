"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuRadioGroupDemo() {
  const [selectedProduct, setSelectedProduct] =
    React.useState("Select Product");
  const products = [
    "RealPage Exchange",
    "On-Site",
    "YieldStar",
    "PropertyWare",
    "RealpagePayments",
    "UPP",
    "ClickPay",
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild  className="mr-2">
          <Button variant="outline" style={{width:'170px'}}>{selectedProduct}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-100">
          <DropdownMenuLabel>Select a Product</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={selectedProduct}
            onValueChange={setSelectedProduct}
          >
            {products.map((product) => (
              <DropdownMenuRadioItem key={product} value={product}>
                {product}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
