"use client";
import ClickType from "@/types/click-type";
import { ChangeEvent, useEffect } from "react";

interface Props {
  clickType: ClickType;
  onClickTypeChanged: (clickType: ClickType) => void;
}

export default function ClickTypeSelector({ clickType, onClickTypeChanged }: Props) {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onClickTypeChanged(event.target.checked ? ClickType.RECORDED : ClickType.SYNTHETIC);
  };



  return (
    <div className="flex flex-col items-center">
      <label className="flex items-center gap-1 cursor-pointer">
        <input
          type="checkbox"
          className="accent-amber-500"
          checked={clickType === ClickType.RECORDED}
          onChange={changeHandler}
        />
        <span className="text-lg">Gravações do Sistema</span>
        {/* <span id="meuElemento"></span> */}
      </label>
    </div>
  );
}
