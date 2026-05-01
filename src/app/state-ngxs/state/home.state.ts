import { Action, State, StateContext } from "@ngxs/store";
import { Hide, Show } from "../actions/home.actions";
import { Injectable } from "@angular/core";

@State<boolean>({
    name: 'home',
    defaults: false
})
@Injectable()
export class HomeState {
    @Action(Show)
    show(ctx: StateContext<boolean>) {
        ctx.setState(true);
    }

    @Action(Hide)
    hide(ctx: StateContext<boolean>) {
        ctx.setState(false);
    }
}