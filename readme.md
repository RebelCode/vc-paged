# Paged Component

## Usage
```js
<paged :collection="allItems" :selected-keys="selectedKeys" inline-template>
  <page v-if="selectedKeys.hasItem('main')" @click="toggleItem('main')">
  	// .. some content  
  </page>
  <page v-if="selectedKeys.hasItem('some')" @click="toggleItem('some')">
  	// .. some content  
  </page>
  <page v-if="selectedKeys.hasItem('bar')" @click="toggleItem('bar')">
  	// .. some content  
  </page>
</paged>
```