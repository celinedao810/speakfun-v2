import {
  Button,
  Html,
  Head,
  Body,
  Tailwind,
  pixelBasedPreset,
  Img,
  Container,
  Preview,
  Section,
  Heading,
  Text,
  Link,
  Hr,
} from '@react-email/components'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export default function Confirm() {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="font-sans">
          <Container className="mx-auto my-10 max-w-116 rounded border border-solid border-gray-200 p-5">
            <Preview>Confirm email address</Preview>
            <Section className="mt-8">
              <Img
                src={`${baseUrl}/logo.png`}
                width="50"
                height="50"
                alt="Speakfun Logo"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-7.5 p-0 text-center text-[24px] font-normal text-black">
              Confirm your email address
            </Heading>
            <Text className="m-0 text-[14px] leading-6 text-gray-800">
              Hi there,
            </Text>
            <Text className="m-0 mt-4 text-[14px] leading-6 text-gray-800">
              Thanks for signing up for{' '}
              <strong className="text-[#005E58]">Speakfun</strong>. Please
              confirm your email address to activate your account.
            </Text>
            <Section className="mt-7 text-center">
              <Button
                href={`${baseUrl}/auth/confirm`}
                className="inline-block rounded bg-[#005E58] px-5 py-3 text-[14px] font-semibold text-white"
              >
                Confirm email
              </Button>
            </Section>
            <Text className="m-0 mt-6 text-[12px] leading-5 text-gray-600">
              If the button does not work, copy and paste this link into your
              browser:
            </Text>
            <Link
              href={`${baseUrl}/auth/confirm`}
              className="text-[12px] leading-5 text-blue-600"
            >
              {`${baseUrl}/auth/confirm`}
            </Link>
            <Hr className="my-6 border-gray-200" />
            <Text className="m-0 text-[12px] leading-5 text-gray-500">
              If you did not create a Speakfun account, you can safely ignore
              this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
