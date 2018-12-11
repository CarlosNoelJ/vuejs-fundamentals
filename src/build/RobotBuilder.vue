<template src="./RobotBuild.html">
</template>

<script>
import availableParts from "../data/parts";

function getPreviousValidIndex(index,  length){
    const deprecatedIndex = index-1;
    return deprecatedIndex < 0 ? length-1: deprecatedIndex;
}

function getNextValidateIndex(index, length){
    const incrementIndex = index + 1;
    return incrementIndex >length-1 ? 0: incrementIndex;
}

export default {
    name: 'RobotBuilder',
    data(){
        return {
          availableParts,
          cart:[],
          selectedHeadIndex:0,
          selectedTorsoIndex:0,
          selecteLeftdArmIndex:0,
          selecteRightdArmIndex:0,
          selecteBaseIndex:0,
        };
    },
    computed:{
        headBorderStyle(){
            return {border: this.selectedRobot.head.onSale ? '3px solid red': '3px solid #aaa'
            };
        },
        selectedRobot(){
            return {
                head: availableParts.heads[this.selectedHeadIndex],
                leftArm: availableParts.arms[this.selecteLeftdArmIndex],
                rightArm: availableParts.arms[this.selecteRightdArmIndex],
                torso: availableParts.torsos[this.selectedTorsoIndex],
                base: availableParts.bases[this.selecteBaseIndex],
            };
        },
    },
    methods:{
        addToCart(){
            const robot = this.selectedRobot;
            const cost = robot.head.cost + robot.leftArm.cost + robot.rightArm.cost + robot.torso.cost + robot.base.cost;
            this.cart.push(Object.assign({}, robot, { cost }));
        },
        selectNextHead(){
            this.selectedHeadIndex = getNextValidateIndex(this.selectedHeadIndex, availableParts.heads.length);
        },
        selectPreviousHead(){
            this.selectedHeadIndex = getPreviousValidIndex(this.selectedHeadIndex, availableParts.heads.length);
        },
        selectPreviousTorso(){
            this.selectedTorsoIndex = getPreviousValidIndex(this.selectedTorsoIndex, availableParts.torsos.length);
        },
        selectNextTorso(){
            this.selectedTorsoIndex = getNextValidateIndex(this.selectedTorsoIndex, availableParts.torsos.length);
        },
        selectPreviousLeftArm(){
            this.selecteLeftdArmIndex = getPreviousValidIndex(this.selecteLeftdArmIndex,availableParts.arms.length);
        },
        selectNextLeftArm(){
            this.selecteLeftdArmIndex = getNextValidateIndex(this.selecteLeftdArmIndex,availableParts.arms.length);
        },
        selectPreviousRightArm(){
            this.selecteRightdArmIndex = getPreviousValidIndex(this.selecteRightdArmIndex,availableParts.arms.length);
        },
        selectNextRightArm(){
            this.selecteRightdArmIndex = getNextValidateIndex(this.selecteRightdArmIndex,availableParts.arms.length);
        },
        selectPreviousBase(){
            this.selecteBaseIndex = getPreviousValidIndex(this.selecteBaseIndex,availableParts.arms.length);
        },
        selectNextBase(){
            this.selecteBaseIndex = getNextValidateIndex(this.selecteBaseIndex,availableParts.arms.length);
        },
    },
};
</script>

<style scoped>
    @import './RobotBuilder.css';
</style>
