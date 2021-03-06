/*! Copyright (c) 2019 Siemens AG. Licensed under the MIT License. */

import { Controller } from "@coaty/core";
import { NodeUtils } from "@coaty/core/runtime-node";

/**
 * Template controller with lifecycle methods.
 */
export class FooController extends Controller {

    onInit() {
        super.onInit();

        NodeUtils.logInfo("FooController.onInit");
    }

    onCommunicationManagerStarting() {
        super.onCommunicationManagerStarting();

        NodeUtils.logInfo("FooController.onCommunicationManagerStarting");
    }

    onCommunicationManagerStopping() {
        super.onCommunicationManagerStopping();

        NodeUtils.logInfo("FooController.onCommunicationManagerStopping");
    }

}
