import React from 'react'
import AsideBar from '../AsideBar/AsideBar'
import Service from '../ServiceSection/Service'

const ServicesPage = () => {
    return (
        <div>
            <AsideBar menu = {[{title: "Home" , icon:"fa fa-home" , path:'/'} , {title:"About" , icon:"fa fa-user" , path:'/about'} , {title:"Services" , icon:"fa fa-list" , path:'/services'} , {title: "Portifolio" , icon:"fa fa-briefcase" , path:'/portifolio'} , {title: "Contact", icon:"fa fa-comments" , path: '/contact'}]}/>
            <Service/>
        </div>
    )
}

export default ServicesPage