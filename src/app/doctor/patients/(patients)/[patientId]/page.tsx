import React from 'react'

const page = async ({params}: {params: Promise<{patientId: string}>}) => {
  const { patientId } = await params;
  return (
    <div>
      <h1>Patient ID: {patientId}</h1>
    </div>
  )
}

export default page
