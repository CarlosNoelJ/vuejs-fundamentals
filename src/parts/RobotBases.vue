<template>
    <div>
    <h2>Torsos</h2>
    The torso is the central part of your robot that holds everything
    together. Choosing the right torso will help ensure your robot
    functions well with the parts you choose.
    <div v-for="(bases, idx) in bases" :key="idx">
        <h4>{{bases.title}}</h4>
        <div>{{bases.description}}</div>
    </div>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
    name: 'RobotBases',
    data() {
        return { bases: parts.bases };
    },
};
</script>

<style>

</style>
