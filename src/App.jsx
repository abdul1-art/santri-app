import React from 'react'
import { Button } from './components/ui/button'
import { UserCheck2 } from 'lucide-react'
import { Input } from './components/ui/input'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Switch } from 'radix-ui/switch'

function App() {
  return (
    <div>
      <Button variant='secondary'>Button</Button>
      <Button variant='outline'>Button</Button>
      <Button variant='ghost'>Button</Button>
      <Button variant='destructive'>Button</Button>
      <Button>Button</Button>
      <hr />
      <Button variant='destructive' size='xs'>Button</Button>
      <Button variant='destructive' size='sm'>Button</Button>
      <Button variant='destructive' size='lg'>Button</Button>
      <Button variant="outline" className="rounded-full">
        <UserCheck2 /> New Branch
      </Button>
      <hr />
      <Input placeholder="Enter text" />

      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldDescription>This appears on invoices and emails.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
            <FieldDescription>This appears on invoices and emails.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" autoComplete="off" aria-invalid />
            <FieldError>Choose another username.</FieldError>
          </Field>
          <Field orientation="horizontal">
            <Switch id="newsletter" />
            <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>

    </div>
  )
}

export default App

