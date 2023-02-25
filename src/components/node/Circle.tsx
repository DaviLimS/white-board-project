import { Handle, NodeProps, Position } from 'reactflow';

export function Circle(node: NodeProps) {
    return (
        <div className="bg-yellow-200 rounded-full w-full h-full min-w-[200px] min-h-[200px]">
        <Handle 
        id="right"
        type="source" 
        position={Position.Right}
        className='-right-5 w-3 h-3 bg-blue-300'
        />

        <Handle 
        id="left" 
        type="source" 
        position={Position.Left}
        className='-left-5 w-3 h-3 bg-blue-300'
        />

        <Handle 
        id="top" 
        type="source" 
        position={Position.Top}
        className='-top-5 w-3 h-3 bg-blue-300'
        />

        <Handle 
        id="bottom" 
        type="source" 
        position={Position.Bottom}
        className='-bottom-5 w-3 h-3 bg-blue-300'
        />
    </div>
    )
}