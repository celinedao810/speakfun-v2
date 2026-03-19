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
  Hr,
} from '@react-email/components'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export default function MagicLink() {
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
            <Preview>Speakfun magic link</Preview>
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
              Your magic link
            </Heading>
            <Section className="mt-7 text-center">
              <Button
                href={`${baseUrl}/auth/magic-link/confirm`}
                className="inline-block rounded-lg bg-[#005E58] px-5 py-2 text-[14px] font-semibold text-white"
              >
                Click here to login
              </Button>
            </Section>
            <Text className="m-0 mt-6 text-[12px] leading-5 text-gray-600">
              This link and code will only be valid for the next 5 minutes. If
              the link does not work, you can use the login verification code
              directly:
            </Text>
            <code className="mt-4 inline-block w-9/10 rounded-md border border-solid border-[#eee] bg-[#f4f4f4] px-[4.5%] py-4 text-center text-[#333]">
              1234-5678
            </code>
            <Hr className="my-6 border-gray-200" />
            <Text className="m-0 text-[12px] leading-5 text-gray-500">
              If you didn&#39;t try to login, you can safely ignore this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
