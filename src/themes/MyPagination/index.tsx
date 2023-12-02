'use client'
import React, { useEffect } from "react";
import { Pagination, PaginationItemType, PaginationItemRenderProps, cn } from "@nextui-org/react";
import arrow from '@/assets/arrow2.png'
import Arrow from "@/assets/arrow";

interface thisProps {
    count: number,
    pg: number,
    setPg: (val: number) => void
}
export default function MyPagination({ count, setPg, pg }: thisProps) {


    const renderItem = ({
        ref,
        key,
        value,
        isActive,
        setPage,
        onNext,
        onPrevious,
        className,
    }: PaginationItemRenderProps<HTMLButtonElement>) => {
        console.log(count, pg);
        if (value === PaginationItemType.NEXT) {
            return (
                <button key={key} className={cn(className, "group hover:bg-green bg-[#DEE6EE] text-ellipsis w-[30px] h-[30px]")} onClick={() => { onNext(), setPg(pg !== count ? pg + 1 : pg) }}>
                    <Arrow className="fill-dark group-hover:fill-light duration-100" />
                </button>
            );
        }

        if (value === PaginationItemType.PREV) {
            return (
                <button key={key} className={cn(className, "group hover:bg-green bg-[#DEE6EE] w-[30px] h-[30px]")} onClick={() => { onPrevious(), setPg(pg !== 1 ? pg - 1 : 1) }}>
                    <Arrow className="fill-dark rotate-180 group-hover:fill-light duration-100" />
                </button>
            );
        }

        if (value === PaginationItemType.DOTS) {
            return <button key={key} className={className}>...</button>;
        }

        return (
            <button
                ref={ref}
                key={key}
                className={cn(
                    className, 'bg-[#DEE6EE] px-[10px] w-[30px] h-[30px]',
                    isActive &&
                    "!text-dark !bg-green",
                )}
                onClick={() => { setPage(value), setPg(value) }}
            >
                {value}
            </button>
        );
    };


    return (
        <Pagination
            color="success"
            showControls
            total={count}
            initialPage={1}
            className="!gap-3"
            radius="full"
            renderItem={renderItem}
            variant="light"
        />
    );
}

