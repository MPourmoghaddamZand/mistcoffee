import React, { useEffect } from "react";
import Input from "../components/utils/Inputs/Input";
import Button from "../components/utils/buttons/Button";
import { useNavbarContext } from "../context/NavbarProvider";

const NameSection = () => {
     
    return (
        <div className="relative">
            <h1 className="font-[Ray] font-black text-myprimary text-[94px] leading-[94px] text-center">
                کافـــه
                <br />
                میست
            </h1>
            <h1 className="font-trajan font-black absolute -top-5 left-1/2 -translate-x-1/2 text-myprimary opacity-25 leading-[100px] text-[94px]">
                Mist
                <br />
                Cafe
            </h1>
        </div>
    );
};

const InputSection = () => {
    return (
        <div className="flex flex-col w-full gap-4 mt-8">
            <Input placeholder={"شماره تلفن"} className="!text-center" icon={''}/>
            <Button link={"/menu"}>بزن بریم</Button>
        </div>
    );
};

const Starter = () => {
    return (
        <div className="w-full h-screen bg-myaccent">
            <div className="flex flex-col justify-evenly items-center w-full h-full">
                <NameSection />
                <InputSection />
            </div>
        </div>
    );
};

export default Starter;
