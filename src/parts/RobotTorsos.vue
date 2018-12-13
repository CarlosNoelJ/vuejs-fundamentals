<template>
    <div>
    <h2>Torsos</h2>
    The torso is the central part of your robot that holds everything
    together. Choosing the right torso will help ensure your robot
    functions well with the parts you choose.
    <div v-for="(torsos,idx) in parts.torsos" :key="idx">
        <h4>{{torsos.title}}</h4>
        <div>{{torsos.description}}</div>
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';
export default {
  name: 'RobotTorsos',
  mixin: [getPartsMixin],
};
</script>

<style>

</style>
