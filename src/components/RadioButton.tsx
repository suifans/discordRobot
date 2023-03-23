import { CheckIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";


interface RadioOption {
    name: string;
    id: string;
    color:string
}

interface RadioButtonProps {
    options: RadioOption[];
    activeOption?: string;
    onChange?: (value: string) => void;
}

export default function RadioButton({
                                        options,
                                        activeOption,
                                        onChange,
                                    }: RadioButtonProps) {
    const [active, setActive] = useState<string>(activeOption ?? options[0].id);

    const handleClick = (id: string) => {
        setActive(id);
        if (onChange) onChange(id);
    };

    return (
        <div className="flex flex-col space-y-5 mr-5">
            {options.map((option) => (
                <label key={option.id} className="justify-between flex items-center space-x-2 cursor-pointer">
                    <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-sm  mr-2`}
                             style={{backgroundColor:`#${option.color=="0"?"fafafa":(Number(option.color)).toString(16)}`}}>

                        </div>
                    <span className="text-sm font-medium">{option.name}</span>
                    </div>
                    <input
                        type="radio"
                        className="sr-only"
                        value={option.id}
                        checked={active === option.id}
                        onChange={() => handleClick(option.id)}
                    />
                    {active === option.id ? (
                        <span className="inline-block w-4 h-4 border-4 border-indigo-400 rounded-full bg-white flex-shrink-0"></span>
                    ):(
                        <span className="inline-block w-4 h-4 border border-gray-300 rounded-full bg-white flex-shrink-0"></span>
                    )}
                </label>
            ))}
        </div>
    );
}
