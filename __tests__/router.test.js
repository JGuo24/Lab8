/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router";

describe('test pushToHistory stack length', () =>{
    
    test('push settings is correct', () => {
        let length = history.length;
        expect(pushToHistory('settings', 0).length).toBe(length + 1);  
    });

    test('push entry is correct', () =>{
        let length = history.length;
        expect(pushToHistory('entry', 1).length).toBe(length + 1);
    });

    test('push null is correct', () =>{
        let length = history.length;
        expect(pushToHistory('','').length).toBe(length+1);
    });
})

describe('test pushToHistory current state object', () =>{
    test('settings page state is correct', () =>{
        expect(pushToHistory('settings').state.page).toBe('settings');
    });
    test('entry page state is correct', () =>{
        expect(pushToHistory('entry', 4).state.page).toBe('entry4');
    });
    test('default page state is correct', () =>{
        expect(pushToHistory().state.page).toBe();
    });
})