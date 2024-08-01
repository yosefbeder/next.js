import dynamic from 'next/dynamic'

const DynamicImportRedButton = dynamic<{}>(() =>
  import('../components/red').then((module) => module.Red)
)

export default function Foo() {
  return <DynamicImportRedButton />
}
