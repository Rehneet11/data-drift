"use client"
import { Workflow } from '@prisma/client'
import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react'
import React from 'react'
import '@xyflow/react/dist/style.css'

function FlowEditor({workflow}:{workflow:Workflow}) {
    const [nodes,setNodes,onNodesChange]=useNodesState([]);
    const[edges,setEdges,onEdgesChange] = useEdgesState([]);
  return (
    <main className='h-full w-full'>
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}>
            <Controls position='top-left'/>
            <Background variant={BackgroundVariant.Lines} gap={20} size={2}/>
        </ReactFlow>
    </main>
  )
}

export default FlowEditor