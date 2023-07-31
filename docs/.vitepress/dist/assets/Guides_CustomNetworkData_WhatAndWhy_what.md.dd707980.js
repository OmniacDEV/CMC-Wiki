import{_ as e,o as t,c as o,a}from"./chunks/framework.b8a39646.js";const g=JSON.parse('{"title":"What is Custom Network Data?","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"Guides/CustomNetworkData/WhatAndWhy/what.md","filePath":"Guides/CustomNetworkData/WhatAndWhy/what.md"}'),r={name:"Guides/CustomNetworkData/WhatAndWhy/what.md"},n=a('<h1 id="what-is-custom-network-data" tabindex="-1">What is Custom Network Data? <a class="header-anchor" href="#what-is-custom-network-data" aria-label="Permalink to &quot;What is Custom Network Data?&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p><strong>Custom Network Data</strong> is made possible by overriding the data that is sent between the client and the server to inject (or remove) custom data. This can be achieved through the <a href="https://docs.unrealengine.com/5.2/en-US/API/Runtime/Engine/GameFramework/UCharacterMovementComponent" target="_blank" rel="noreferrer">CharacterMovementComponent</a>&#39;s <strong>NetworkMoveData</strong> system.</p><p>There are two diferent types of network data that you can override:</p><ol><li><strong><a href="https://docs.unrealengine.com/5.2/en-US/API/Runtime/Engine/GameFramework/FCharacterNetworkMoveDataContain-/" target="_blank" rel="noreferrer">CharacterNetworkMoveData</a> (NetworkMoveData)</strong></li><li><strong><a href="https://docs.unrealengine.com/5.2/en-US/API/Runtime/Engine/GameFramework/FCharacterMoveResponseDataContai-/" target="_blank" rel="noreferrer">CharacterMoveResponseData</a> (MoveResponseData)</strong>.</li></ol><h2 id="networkmovedata" tabindex="-1">NetworkMoveData <a class="header-anchor" href="#networkmovedata" aria-label="Permalink to &quot;NetworkMoveData&quot;">​</a></h2><p><strong>NetworkMoveData</strong> is sent from the client to the server every single frame, and it contains the <strong>input state</strong>, <strong>output state</strong>, and <strong>TimeStamp</strong> of the performed move.</p><p>When the server recieves this data, it will perform the move with the given input state, and check if its computed output state matches the client&#39;s output state. If the client&#39;s output state is too different form the server&#39;s computed output state, then the server sends a <strong>net correction</strong> to the client.</p><h2 id="moveresponsedata" tabindex="-1">MoveResponseData <a class="header-anchor" href="#moveresponsedata" aria-label="Permalink to &quot;MoveResponseData&quot;">​</a></h2><p><strong>MoveResponseData</strong> is sent from the server to the client, and is in one to one correspondence with each recieved move. This mean that for every <strong>NetworkModeData</strong> sent by the client, the server will send back a corresponding MoveResponse.</p><p>Depending on whether the server is sending a <strong>net correction</strong> or not, this MoveResponse can be one of two things:</p><ol><li><p>If the server agrees with the client&#39;s <strong>output state</strong> for the given move, it will simply <strong>acknowledge</strong> the move and the MoveResponse will only contain a few bits (mainly just a positive bool called <strong>bAckGoodMove</strong>).</p></li><li><p>If a <strong>desync</strong> is detected, the server will send a MoveResponse with all the <strong>intermediate state</strong> and <strong>output state</strong> bits. When the client recieves the MoveResponse data, it adjusts to the server&#39;s values and <strong>re-simulates</strong> the <strong>pending moves</strong>.</p></li></ol>',12),s=[n];function i(h,d,c,l,m,p){return t(),o("div",null,s)}const u=e(r,[["render",i]]);export{g as __pageData,u as default};
