import { ReceivingPacket } from "../receivingPacket";
import { IdToGameType, ItemSlot, type SurvivBitStream } from "../../utils";

export class SpectatePacket extends ReceivingPacket {

    deserialize(stream: SurvivBitStream): void {
        const p = this.p;
        p.spectateBegin = stream.readBoolean(); // Spectate begin
        p.spectateNext = stream.readBoolean(); // Spectate next
        p.spectatePrevious = stream.readBoolean(); // Spectate previous
        p.spectateForce = stream.readBoolean(); // Spectate force
        stream.readBits(4); // Padding
    }
}
