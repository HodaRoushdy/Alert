import { ReactNode } from "react";
import AlertTypes from "../types";

interface IProps{
    type:AlertTypes;
    icone:ReactNode;
    title:string;
    description?:string;
    children?:ReactNode
}

export default IProps