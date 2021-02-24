import styles from "./Messages.module.css";
import {Badge, Card, Image} from "react-bootstrap";
import profileDefaultImg from "../../../images/profile-default.jpg";
import React from "react";

const Dialog = ({image, interlocutor, message, messageCount}) => {
    return (<Card className={styles.message_card_wrapper}>
        <Card.Body>
            <div className={styles.message_card}><Image className={styles.profile_photo} src={image}
                                                        rounded />
                <div className={styles.message_info}>
                    <div>{interlocutor}</div>
                    <div className="text-muted">{message}</div>
                </div>
                <Badge variant="primary">{messageCount}</Badge>
            </div>
        </Card.Body>
    </Card>)
}

export default Dialog