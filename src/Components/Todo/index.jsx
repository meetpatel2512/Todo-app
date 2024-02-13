import React, { Component } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"



export default class index extends Component {
    state = {}

    render() {
        return (
            <div className='flex flex-col min-h-screen mx-3 gap-5'>
                <div className='flex justify-center text-4xl capitalize my-8'>
                    <h1>apna todo app</h1>
                </div>
                <div className='flex justify-center'>
                    <Input className="basis-96 rounded-r-none" />
                    <Button variant="outline" className="capitalize rounded-l-none bg-blue-500 text-white">add todo</Button>
                </div>
                <div className='flex flex-col md:mx-20 flex-1 gap-3'>

                    <div className='flex items-center flex-1 gap-3'>
                        <Checkbox />
                        <p className='flex-1 line-clamp-2'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>
                    <div className='flex items-center flex-1 gap-3 line-clamp-2'>
                        <Checkbox />
                        <p className='flex-1'>Lorem ipsum dolor sit amet.</p>
                        <Button variant="outline" className="bg-red-600 hover:bg-red-400 text-white">delete</Button>
                    </div>

                </div>
                <div className='flex '>
                    <Button variant="default" className='flex-1 rounded-none bg-blue-600 hover:bg-blue-400'>All</Button>
                    <Button variant="destructive" className='flex-1 rounded-none bg-red-600 hover:bg-red-400 '>Pending</Button>
                    <Button variant="secondary" className='flex-1 rounded-none bg-green-600 hover:bg-green-400'>Complated</Button>

                </div>
            </div>
        )
    }
}
