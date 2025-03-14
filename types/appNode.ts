import { Node } from "@xyflow/react";
import { TaskType } from "./task";
export interface CustomNodeData{
    type:TaskType;
    inputs:Record<string,string>;
    [key:string]:any;
}

export interface CustomeNode extends Node{
    data:CustomNodeData
}