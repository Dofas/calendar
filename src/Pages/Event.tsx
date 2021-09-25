import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../Components/EventCalendar";
import EventForm from "../Components/EventForm";
import { useActions } from "../Hooks/useActions";
import { useTypedSelector } from "../Hooks/useTypedSelector";
import { IEvent } from "../Models/IEvent";

const Event: FC = () => {
    const [visible, setVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions();
    const {guests, events} = useTypedSelector(state => state.event);
    const {user} = useTypedSelector( state => state.auth)

    useEffect(() =>{
        fetchGuests();
        fetchEvents(user.username);
    },[])

    const addnewEvent = (event: IEvent) => {
        setVisible(false);
        createEvent(event);
    }

  return (
      <Layout>
          <EventCalendar events={events} />
          <Row justify='center' >
              <Button
                onClick ={() => setVisible(true)}
              >
                 Створити подію
              </Button>
          </Row>
          <Modal
            title ='Створити подію'
            visible={visible}
            footer={null}
            onCancel={() => setVisible(false)}
          >
            <EventForm
                guests={guests}
                submit={addnewEvent}
            />
          </Modal>
      </Layout>
  );
};

export default Event;
