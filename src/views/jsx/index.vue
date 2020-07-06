<template>
  <div>
    <item :level="1">这是H1</item>
    <item :level="2">这是H2</item>
    <item :level="3">这是H3</item>

    <Jsx :level="2">我是JSX h2</Jsx>

    <function-component />
  </div>
</template>

<script>
import Item from './item'
import Jsx from './jsx'

const FunctionComponent = () => <div>JSX Function Component</div>

console.log(FunctionComponent, 'functional component')

export default {
  components: {
    Item,
    Jsx,
    FunctionComponent
  }
}
</script>
