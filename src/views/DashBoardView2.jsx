"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar, BarChart, CartesianGrid, XAxis, LabelList, Pie, PieChart } from "recharts";
import { TrendingUp, RefreshCcw, AlertCircle } from "lucide-react";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const API_BASE_URL = import.meta.env.VITE_API_URL 

export function DashBoardView() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ฟังก์ชันดึงข้อมูลจาก Backend
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
       const response = await axios.get(`${API_BASE_URL}/api/v1/dashboard`);

    if (response.data.success) {
      setData(response.data.data);
    }
  } catch (err) {
    console.error("Fetch Dashboard Error:", err);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // ใช้ข้อมูลจาก State ถ้าไม่มี (Loading/Error) ให้ใช้โครงสร้างว่างไว้ก่อน
  const salesData = data?.salesChart?.data || [];
  const salesConfig = data?.salesChart?.config || {
    clothes: { label: "Clothes", color: "#A71B79" },
    cosmetics: { label: "Cosmetics", color: "#E0C013" },
  };

  const collectionsData = data?.collectionsChart?.data || [];
  const collectionsConfig = data?.collectionsChart?.config || {
    collections: { label: "Collections" }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 w-full gap-4">
        <RefreshCcw className="animate-spin text-sky-500 w-8 h-8" />
        <p className="text-muted-foreground animate-pulse">กำลังดึงข้อมูลล่าสุด...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 w-full gap-4 text-rose-500">
        <AlertCircle className="w-8 h-8" />
        <p>{error}</p>
        <button 
          onClick={fetchDashboardData}
          className="px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-bold"
        >
          ลองใหม่อีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-6 p-4 md:p-8">
      {/* 1. Bar Chart - Sales Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Sales Order Summary</CardTitle>
          <CardDescription>การสรุปยอดขายแยกตามหมวดหมู่รายเดือน</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={salesConfig} className="min-h-75 w-full">
            <BarChart accessibilityLayer data={salesData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.5} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="clothes" fill="var(--color-clothes)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="cosmetics" fill="var(--color-cosmetics)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* 2. Pie Chart - Collections Trends */}
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Collections Trends</CardTitle>
          <CardDescription>สัดส่วนยอดสั่งซื้อตาม Collection</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={collectionsConfig}
            className="mx-auto aspect-square max-h-75 [&_.recharts-text]:fill-foreground"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="collections" hideLabel />}
              />
              <Pie 
                data={collectionsData} 
                dataKey="collections" 
                nameKey="browser"
                innerRadius={60}
                strokeWidth={5}
              >
                <LabelList
                  dataKey="browser"
                  className="fill-foreground"
                  stroke="none"
                  fontSize={12}
                  formatter={(value) => collectionsConfig[value]?.label || value}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm text-center">
          <div className="flex items-center gap-2 leading-none font-medium">
            มีแนวโน้มเติบโตขึ้น 5.2% ในเดือนนี้ <TrendingUp className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="text-muted-foreground leading-none">
            แสดงข้อมูลคอลเลกชันยอดนิยม 6 เดือนย้อนหลัง
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DashBoardView;