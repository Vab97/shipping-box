import React from 'react'
import { Table } from '../components/Table'

export const InputList = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-blue-500 font-semibold text-center">Boxes List</h2>
      <Table />
    </div>
  )
}
