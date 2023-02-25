import ReactFlow, { addEdge, Background, Connection, ConnectionMode, Controls, Node, useEdgesState, useNodesState, useNodeId, useNodes } from 'reactflow';
import { zinc } from 'tailwindcss/colors'
import * as Toolbar from '@radix-ui/react-toolbar';
import 'reactflow/dist/style.css';

import { Square } from './components/node/Square';
import { Circle } from './components/node/Circle'
import { useCallback } from 'react';
import nodes from 'reactflow';
import DefaultEdge from './components/edges/DefaultEdge';

const NODE_TYPES = {
  square: Square,
  circle: Circle,
}

const EDGE_TYPES = {
  default: DefaultEdge,
}

const initialNodes = [

] satisfies Node[]

function App() {
  const [edges, setEdges, onEdgesChang] = useEdgesState([])
  const [nodes, setNodes, onNodesChang] = useNodesState(initialNodes)

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  function addSquareNode() {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 750,
          y: 450,
        },
        data: {},
      },
    ])
  }

  function addCircleNode() {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'circle',
        position: {
          x: 750,
          y: 450,
        },
        data: {},
      },
    ])
  }

  return (
    <div className='w-screen h-screen'>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChang}
        onConnect={onConnect}
        onNodesChange={onNodesChang}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background 
          gap={20}
          size={3}
          color='#ECC2FF'
        />
        <Controls />
      </ReactFlow>

      <Toolbar.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden'>
        <Toolbar.Button 
        onClick={addSquareNode}
        className='w-16 h-16 mt-1.5 bg-violet-500 rounded-lg mr-20'>
        </Toolbar.Button>

        <Toolbar.Button 
        onClick={addCircleNode}
        className='w-16 h-16 translate-x-15 mt-1.5 bg-yellow-200 rounded-full'
        >
        </Toolbar.Button>
      </Toolbar.Root>
    </div>
  )
}

export default App
