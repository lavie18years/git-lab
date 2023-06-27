import React from 'react'
import { Container } from 'react-materialize'
import { TextInput } from 'react-materialize'
import { Textarea } from 'react-materialize'
import { Button } from 'react-materialize'
import { Select } from 'react-materialize'
import { Icon } from 'react-materialize'
export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Container>
            <h3>Contact us</h3>
            <form onSubmit={handleSubmit}>
                <TextInput id="TextInput-38" label="Your Name" />
                <TextInput id="Text Input-39" label="Your Phone" />
                <TextInput email id="TextInput-41" label="Email" validate />
                <Select id="Select-46" multiple={false} onChange={function noRefCheck() { }} value="">
                    <option disabled value="">
                        Choose your favourite film
                    </option>
                    <option value="1">
                        Naruto
                    </option>
                    <option value="2">
                        Onpice
                    </option>
                    <option value="3">
                        Dragon Ball
                    </option>
                </Select>
                <Textarea icon={<Icon></Icon>} id="Textarea-28" label="Your content" />
                <Button>Submit</Button>
            </form>
        </Container>
    )
}