

import { writable } from 'svelte/store';
import { get } from 'svelte/store';


export let chairAngle = writable(0);
export let turnDirection = true;

export let chairHeight = writable(0);

export function moveUp() {

    let height = get(chairHeight);

    if(height < 5) {

        chairHeight.update(height => height + 1);

    }


}

export function moveDown() {

    let height = get(chairHeight);

    if(height > 0) {

        chairHeight.update(height => height - 1);

    }


}

export function rotateClockwise() {

    turnDirection = true;

    const angle = get(chairAngle);  

    if (angle < 180) {

        chairAngle.update(angle => angle + 1);
    }

    else {

        chairAngle.update(angle => -angle);
    }


    console.log("Chair Angle: ", chairAngle);
}

export function rotateCounterClockwise() {

    turnDirection = false;

    const angle = get(chairAngle);

    if (angle > -180) {

        chairAngle.update(angle => angle - 1);
    }

    else {

        chairAngle.update(angle => -angle);
    }
}

export let usbc_1_charge = writable(0);
export let usbc_2_charge = writable(0);
export let usbc_3_charge = writable(0);
export let usbc_4_charge = writable(0);


export function charge_usbc_1() {

    let charge = 0;

    usbc_1_charge.set(0);

    setInterval(() => {

        if (charge < 100) {

            usbc_1_charge.update(charge => charge + 1)

            charge = get(usbc_1_charge);
        }
    }, 100);

}

export function charge_usbc_2() {

    let charge = 0;

    usbc_2_charge.set(0);

    setInterval(() => {

        if (charge < 100) {

            usbc_2_charge.update(charge => charge + 1)

            charge = get(usbc_2_charge);
        }
    }, 100);

}

export function charge_usbc_3() {

    let charge = 0;

    usbc_3_charge.set(0);

    setInterval(() => {

        if (charge < 100) {

            usbc_3_charge.update(charge => charge + 1)

            charge = get(usbc_3_charge);
        }
    }, 100);


}

export function charge_usbc_4() {

    let charge = 0;

    usbc_4_charge.set(0);

    setInterval(() => {

        if (charge < 100) {

            usbc_4_charge.update(charge => charge + 1)

            charge = get(usbc_4_charge);
        }
    }, 100);

}

export let temperature = writable(60); //Starting temp

export function increaseTemp() { //Increase temp

    let tempCheck = get(temperature);

    if (tempCheck < 100) {

        temperature.update(temp => temp + 1);

    }
}

export function decreaseTemp() { //Decrease temp

    let tempCheck = get(temperature);

        if (tempCheck > 40) {

            temperature.update(temp => temp - 1);

        }
}

export function getHeatColor(temp, level) {

    if (temp >= level) {

        if (level > 80) {

            return "red";
        }

        else if (level > 70) {

            return "yellow"
        }

        else {
            
            return "green";

        }

    }
    else {

        return "black";
    }
}

export let selectedTrapezoid = writable(1);

export function selectTrapezoid(number) {

    selectedTrapezoid.set(number);
}

// Each trapezoid gets its own angle
export let angles = writable([0, 0, 0, 0]);

// Each trapezoid gets its own movement
export let positions = writable([0, 0, 0, 0]);

export function changeAngle(amount) {
    const index = get(selectedTrapezoid) - 1;

    angles.update(values => {
        const newValues = [...values];
        newValues[index] += amount;
        return newValues;
    });
}

export function changePosition(amount) {
    const index = get(selectedTrapezoid) - 1;

    positions.update(values => {
        const newValues = [...values];
        newValues[index] += amount;
        return newValues;
    });
}

export const backMassageOn = writable(false);
export const backMassageLevel = writable(1);

export const seatMassageOn = writable(false);
export const seatMassageLevel = writable(1);

export function toggleBackMassage() {
    backMassageOn.update(value => !value);
}

export function setBackMassageLevel(level) {
    backMassageLevel.set(level);
}

export function toggleSeatMassage() {
    seatMassageOn.update(value => !value);
}

export function setSeatMassageLevel(level) {
    seatMassageLevel.set(level);
}