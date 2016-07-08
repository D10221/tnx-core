

import { ObservableThingProperty } from "./tnx-core";

import {Subject} from 'rxjs';

import * as chai  from 'chai';

import {EventArgs, IObservableThing} from "../src/interfaces";

class WithProperties implements IObservableThing{

    /***
     * IObservableThing implementation
     * @type {Subject<EventArgs>}
     */
    xEvents = new  Subject<EventArgs>();
    
    @ObservableThingProperty
    prop:any ;
}

describe('ObservableThingProperty',()=>{
    
    it('works',()=>{

        var target = new WithProperties();

        var eventValue = null;

        target.xEvents.asObservable()
            .filter(e=> e.args.key == 'prop')
            .subscribe(e=>{
               // console.log(e);
               eventValue = e.args.value;
            });

        target.prop = 'x';


        chai.expect(target.prop).equal('x');
        chai.expect(target['_prop']).equal('x');
        chai.expect(eventValue).equal('x');
    });
    
});
