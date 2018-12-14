<template>
    <div>
    <h2>Torsos</h2>
    The torso is the central part of your robot that holds everything
    together. Choosing the right torso will help ensure your robot
    functions well with the parts you choose.
    <div v-for="(base, idx) in parts.bases" :key="idx">
        <h4>{{base.title}}</h4>
        <div>{{base.description}}</div>
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
    name: 'RobotBases',
    mixins: [getPartsMixin],
};
</script>

<style>

</style>
