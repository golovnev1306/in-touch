import React from "react"
import {Badge, Card, Col, Image, Row} from "react-bootstrap"
import profileDefaultImg from '../../../images/profile-default.jpg'
import konst from '../../../images/Konst.jpg'
import styles from './Messages.module.css'
import Dialog from "./Dialog";

const Messages = () => {
    return (
        <>
        <Dialog message={'Привет, как дела?'} image={konst} interlocutor={'Константин Головнев'} messageCount={10}/>
        <Dialog message={'*** ответь мне!!!!'} image={profileDefaultImg} interlocutor={'Александра Салтыкова'} messageCount={26}/>
        <Dialog message={'Задротишь?'} image={profileDefaultImg} interlocutor={'Зарипов Денис'} messageCount={1}/>
        </>
    )
}
export default Messages