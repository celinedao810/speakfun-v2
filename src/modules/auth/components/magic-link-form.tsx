import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'

export function MagicLinkForm({ email }: { email: string }) {
  return (
    <Card className="bg-background">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Check your email</CardTitle>
        <CardDescription>
          Open the magic link we sent to{' '}
          <span className="font-medium text-foreground">{email}</span> to finish
          logging in, or enter the verification code from that email below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="verification-code">
                Verification code
              </FieldLabel>
              <InputOTP maxLength={8} id="otp-verification" required>
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12.5 *:data-[slot=input-otp-slot]:w-12.5 *:data-[slot=input-otp-slot]:text-xl">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12.5 *:data-[slot=input-otp-slot]:w-12.5 *:data-[slot=input-otp-slot]:text-xl">
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </InputOTP>
            </Field>
            <Field>
              <Button type="submit">Verify code</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
