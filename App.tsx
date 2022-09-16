import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

//droppable: 어떤 것을 드롭할 수 있는 영역, draggable: 우리가 드래그 할 수 있는 영역
//--> children 필요, 함수여야만 한다.
function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {() => (
            <ul>
              <Draggable draggableId="first" index={0}>
                {() => <li>One</li>}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {() => <li>Two</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
