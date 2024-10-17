/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Control } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import PhoneInput from "react-phone-number-input";
import ReactDatePicker from "react-datepicker";
import { E164Number } from "libphonenumber-js/core";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import "react-phone-number-input/style.css";

export enum FormFieldTypes {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}

type CustomProps = {
    control: Control<any>;
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
    fieldType: FormFieldTypes;
};

const CustomFormField = ({
    control,
    fieldType,
    name,
    label,
    placeholder,
    iconSrc,
    iconAlt,
    disabled,
    dateFormat,
    showTimeSelect,
    children,
    renderSkeleton,
}: CustomProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {fieldType !== FormFieldTypes.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                    {fieldType === "input" ? (
                        <div className="flex justify-center items-center rounded-md border border-dark-500 bg-dark-400">
                            {iconSrc && (
                                <Image
                                    src={iconSrc}
                                    alt={iconAlt ? iconAlt : "icon"}
                                    width={24}
                                    height={24}
                                    className="ml-2 w-6 h-6"
                                />
                            )}
                            <FormControl>
                                <Input
                                    placeholder={placeholder}
                                    {...field}
                                    className="shad-input border-0"
                                />
                            </FormControl>
                        </div>
                    ) : fieldType === "textarea" ? (
                        <FormControl>
                            <Textarea
                                placeholder={placeholder}
                                {...field}
                                className="shad-textArea"
                                disabled={disabled}
                            />
                        </FormControl>
                    ) : fieldType === "phoneInput" ? (
                        <FormControl>
                            <PhoneInput
                                defaultCountry="GB"
                                placeholder={placeholder}
                                international
                                withCountryCallingCode
                                autoComplete="true"
                                value={field.value as E164Number | undefined}
                                onChange={field.onChange}
                                className="input-phone"
                            />
                        </FormControl>
                    ) : fieldType === "checkbox" ? (
                        <FormControl>
                            <div className="flex items-center gap-4">
                                <Checkbox
                                    id={name}
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                                <label htmlFor={name} className="checkbox-label">
                                    {label}
                                </label>
                            </div>
                        </FormControl>
                    ) : fieldType === "datePicker" ? (
                        <div className="flex rounded-md border border-dark-500 bg-dark-400">
                            <Image
                                src="/assets/icons/calendar.svg"
                                height={24}
                                width={24}
                                alt="user"
                                className="ml-2"
                            />
                            <FormControl>
                                <ReactDatePicker
                                    showTimeSelect={showTimeSelect ?? false}
                                    selected={field.value}
                                    onChange={(date) => field.onChange(date)}
                                    timeInputLabel="Time:"
                                    dateFormat={dateFormat ?? "MM/dd/yyyy"}
                                    wrapperClassName="date-picker"
                                />
                            </FormControl>
                        </div>
                    ) : fieldType === "select" ? (
                        <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="shad-select-trigger">
                                        <SelectValue placeholder={placeholder} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="shad-select-content">
                                    {children}
                                </SelectContent>
                            </Select>
                        </FormControl>
                    ) : (
                        renderSkeleton && renderSkeleton(field)
                    )}
                    <FormMessage className="shad-error" />
                </FormItem>
            )}
        />
    );
};
export default CustomFormField;
