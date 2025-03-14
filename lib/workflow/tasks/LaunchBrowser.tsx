import { TaskType } from "@/types/task";
import { GlobeLockIcon, LucideProps } from "lucide-react";

export const LaunchBrowserTask={
    type:TaskType.LAUNCH_BROWSER,
    label:"Launch Browser",
    icon:(props:LucideProps)=>(
        <GlobeLockIcon className="stroke-sky-400" {...props}/>
    ),
    isEntryPoint:true
}