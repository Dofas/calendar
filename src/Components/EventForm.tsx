import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { Moment } from "moment";
import React, { FC, useState } from "react";
import { useTypedSelector } from "../Hooks/useTypedSelector";
import { IEvent } from "../Models/IEvent";
import { IUser } from "../Models/IUser";
import { formatDate } from "../utils/date";
import { rules } from "../utils/rules";

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: '',
    } as IEvent);

    const {user} = useTypedSelector(state => state.auth)

    const selectDate = (date: Moment | null) => {
        if(date){
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Опис події"
        name="description"
        rules={[rules.required()]}
      >
        <Input
            onChange={ e => setEvent({...event, description: e.target.value})}
            value={event.description}
        />
      </Form.Item>
      <FormItem
        label="Виберіть дату для події"
        name="date"
        rules={[rules.required(), rules.isDateAfter('Некоректна дата')]}
      >
        <DatePicker
            onChange={(date) => selectDate(date)}
        />
      </FormItem>
      <FormItem
      label="Виберіть користувача для події"
      name="guest"
      rules={[rules.required()]}
      >
        <Select
            onChange={(guest: string) => setEvent({...event, guest})}
        >
          {props.guests.map(guest =>
                <Select.Option key={guest.username} value={guest.username}>
                    {guest.username}
                </Select.Option>
            )}
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select>
      </FormItem>
      <Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit">
            Створити
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
