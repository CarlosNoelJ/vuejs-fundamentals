// In order to have a clean code, is usual to use bind and update together, fot that reasson we use export default function...
export default function(element, binding){
    Object.keys(binding.value).forEach((position) => {
        element.style[position] = binding.value[position];
    });
    element.style.position ='absolute';
};

