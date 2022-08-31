import React from 'react'

const Index = React.lazy(() => import('@/admin/Pages/Facility/Index'))
const New = React.lazy(() => import('@/admin/Pages/Facility/New'))

const manageRoutes = [
    { path: '/admin/manage/facility', name: 'Facility', element: Index },
    { path: '/admin/manage/facility/new', name: 'Facility', element: New },
]

export default manageRoutes
