import React from 'react'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'

const cardData1 = [
    {
        id:1,
        title:'Available Position',
        count:24,
        additional:'4 Urgently needed',
        color:'text-main',
        bg:'bg-lightOrange'
    },
    {
        id:2,
        title:'Job Open',
        count:10,
        additional:'4 Actively hiring',
        bg:'bg-lightBlue',
        color:'text-skyBlue'
    },
    {
        id:3,
        title:'New Employees',
        count:24,
        additional:'4 Department',
        bg:'bg-lightPinkish',
        color:'text-pinkish',
    },
]

const cardData2 = [
    {
        id:4,
        title:'Total Employees',
        count:216,
        men:120,
        women:96,
        pastmonth:2,
        img:'images/graph1.png'
    },
    {
        id:5,
        title:'Talent Request',
        count:16,
        men:6,
        women:10,
        pastmonth:5,
        img:'images/graph2.png'
    },
]

function Stats() {
  return (
    <div className='flex flex-col gap-6'>
        <div className='flex sm:flex-row flex-col justify-center gap-4'>
            {
                cardData1.map((card) => (
                    <Card1
                        key={card.id}
                        title={card.title}
                        count={card.count}
                        additional={card.additional}
                        bg={card.bg}
                        color={card.color}
                    />
                ))
            }
        </div>
        <div className='flex sm:flex-row flex-col justify-center gap-5'>
            {
                cardData2.map((card) => (
                    <Card2
                        key={card.id}
                        title={card.title}
                        count={card.count}
                        men={card.men}
                        women={card.women}
                        pastmonth={card.pastmonth}
                        img={card.img}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Stats