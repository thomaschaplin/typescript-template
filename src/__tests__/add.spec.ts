import {benchmark} from "kelonio"
import {add} from "../index"

describe("Add", () => {
    it("should add two numbers", () => {
        const answer = add(1, 2)
        expect(typeof answer).toBe("number")
    })

    it("performance", async () => {
        await benchmark.record(
            ["add", "should add two numbers"],
            () => add(1, 2),
            {meanUnder: 1}
        )
    })
})
