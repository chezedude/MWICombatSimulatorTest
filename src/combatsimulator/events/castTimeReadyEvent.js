import CombatEvent from "./combatEvent";

class CastTimeReadyEvent extends CombatEvent {
    static type = "castTimeReady";

    constructor(time, coolDownDuration) {
        super(CastTimeReadyEvent.type, time);
        this.cooldownduration = coolDownDuration;
    }
}

export default CastTimeReadyEvent;
